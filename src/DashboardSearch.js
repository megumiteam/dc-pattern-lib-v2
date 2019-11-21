import React from 'react';
import {
  InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const DashboardSearch = () => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText>
        <FaSearch />
      </InputGroupText>
    </InputGroupAddon>
    <Input placeholder="Search" />
  </InputGroup>
);
export default DashboardSearch;
