import React, { useEffect, useState } from 'react'
import Text from '../components/Text';
import { styled } from "styled-components";
import Pagination from '../components/Pagination';
import Input from '../components/Input';
const Container = styled.div`
  margin: 0px 100px;
`;

const List = () => {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [paginationData, setPaginationData] = useState({
    start: 0,
    rowSize: 20,
    end: 0,
    totalRows: data?.length,
    pageNo: 0,
  });

  const accessData = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error.message));
  };

  const changePage = (pageNo) => {
    setPaginationData({
      ...paginationData,
      pageNo,
      start: pageNo * paginationData?.rowSize,
      end: paginationData?.rowSize * pageNo + paginationData?.rowSize,
    });
  };

  const onChangeHandler =(e)=>{
    setSearchValue(e.target.value);
    
   const res = data?.filter((apiData) =>
     apiData?.title?.includes(e.target.value)
   );
   setListData(res)
  }

  useEffect(() => {
    accessData();
  }, []);

  return (
    <Container>
      <Text content={"Search"} />
      <Input onChangeHandler={onChangeHandler} onChangeValue={searchValue} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {listData?.map((element, ind) => {
            return (
              <tr key={ind}>
                <td>{element?.id}</td>
                <td>{element?.title}</td>
                <td>{element?.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        data={data}
        changePage={changePage}
        paginationData={paginationData}
        setListData={setListData}
        setPaginationData={setPaginationData}
      />
    </Container>
  );
}

export default  List
