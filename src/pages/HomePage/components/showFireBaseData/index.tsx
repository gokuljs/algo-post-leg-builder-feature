import React, { Dispatch } from "react";
import { Grid } from "@mui/material";
import { ShowFireBaseDataWrapper, TableHeaderContainer } from "./styles";
import { AlgoPostDataProps } from "../../../../types";
import CloseIcon from "@mui/icons-material/Close";

function DisplayFireBaseData({
  fetchData,
  setShowDataSet,
}: {
  fetchData: AlgoPostDataProps[] | [];
  setShowDataSet: Dispatch<boolean>;
}) {
  return (
    <ShowFireBaseDataWrapper item lg={12}>
      <Grid container item lg={12} display="flex" justifyContent={"flex-end"}>
        <CloseIcon className="close" onClick={() => setShowDataSet(false)} />
      </Grid>
      <Grid
        display="flex"
        className="table-container"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          display="flex"
          item
          justifyContent="center"
          flexWrap="wrap"
          flexDirection="column"
          py={3}
        >
          <TableHeaderContainer>id</TableHeaderContainer>
          <TableHeaderContainer>lots</TableHeaderContainer>
          <TableHeaderContainer>position</TableHeaderContainer>
          <TableHeaderContainer>optionType</TableHeaderContainer>
          <TableHeaderContainer>expiry</TableHeaderContainer>
          <TableHeaderContainer>strikeCriteria</TableHeaderContainer>
          <TableHeaderContainer>atmStrike</TableHeaderContainer>
          <TableHeaderContainer>strikeAdjustMent</TableHeaderContainer>
          <TableHeaderContainer>lowerRange</TableHeaderContainer>
          <TableHeaderContainer>upperRange</TableHeaderContainer>
          <TableHeaderContainer>strikeType</TableHeaderContainer>
          <TableHeaderContainer>simpleMomentumType</TableHeaderContainer>
          <TableHeaderContainer>simpleMomentumValue</TableHeaderContainer>
          <TableHeaderContainer>trailSlType</TableHeaderContainer>
          <TableHeaderContainer>instrumentMove</TableHeaderContainer>
          <TableHeaderContainer>stopLossMove</TableHeaderContainer>
        </Grid>

        {Array.isArray(fetchData) &&
          fetchData.length > 0 &&
          fetchData.map((item, index) => (
            <Grid
              display="flex"
              item
              justifyContent="flex-start"
              flexDirection="column"
              py={3}
            >
              <TableHeaderContainer>{item.id && index}</TableHeaderContainer>
              <TableHeaderContainer>
                {item.lots && item?.lots}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.position && item?.position}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.optionType && item?.optionType}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.expiry && item?.expiry}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.strikeCriteria && item?.strikeCriteria}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.atmStrike && item?.atmStrike}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.strikeAdjustMent && item?.strikeAdjustMent}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.lowerRange && item?.lowerRange}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.upperRange && item?.upperRange}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.strikeType && item?.strikeType}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.simpleMomentumType && item?.simpleMomentumType}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.simpleMomentumValue && item.simpleMomentumValue}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.trailSlType && item?.trailSlType}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.instrumentMove && item?.instrumentMove}
              </TableHeaderContainer>
              <TableHeaderContainer>
                {item.stopLossMove && item?.stopLossMove}
              </TableHeaderContainer>
            </Grid>
          ))}
      </Grid>
    </ShowFireBaseDataWrapper>
  );
}

export default DisplayFireBaseData;
