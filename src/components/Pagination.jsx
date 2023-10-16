import React, { memo, useEffect } from "react";
import Button from "./Button";
import Text from "./Text";
import { styled } from "styled-components";
const Container = styled.div`
  margin: 0px 100px;
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pagination = (props) => {
  const { changePage, paginationData, data, setListData, setPaginationData } =
    props;
  useEffect(() => {
    const tempData = [...data];
    setListData(
      tempData?.splice(paginationData.start, paginationData?.rowSize)
    );
    setPaginationData({
      ...paginationData,
      totalRows: data?.length,
      end: paginationData?.rowSize,
    });
  }, [data]);

  useEffect(() => {
    const tempData = [...data];
    setListData(
      tempData?.splice(paginationData.start, paginationData?.rowSize)
    );
  }, [paginationData?.start]);

  return (
    <Container>
      <PaginationContainer>
        <Button
          title="<< prev "
          onClick={() => changePage(paginationData?.pageNo - 1)}
          isDisabled={paginationData?.start <= 0}
        />
        <Text
          content={`${paginationData?.start + 1} - ${paginationData?.end} of${
            paginationData?.totalRows
          }`}
        />

        <Button
          title="Next >>"
          onClick={() => changePage(paginationData?.pageNo + 1)}
          isDisabled={paginationData?.totalRows <= paginationData?.end}
        />
      </PaginationContainer>
    </Container>
  );
};

export default memo(Pagination);
