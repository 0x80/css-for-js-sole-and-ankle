import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";
import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import ShoeGrid from "../ShoeGrid";
import ShoeSidebar from "../ShoeSidebar";
import Spacer from "../Spacer";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  min-width: 180px;
  padding-top: 14px;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid hotpink; */
  flex: 4 1;
  /* height: 200vh; */
  /* min-height: 100%; */
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
  /* border: 1px solid hotpink; */
  justify-content: space-between;
  /* flex-grow: 1; */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  /* margin-right: auto; */
  /* border: 1px solid; */
`;

export default ShoeIndex;
