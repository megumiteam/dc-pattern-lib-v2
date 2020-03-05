import React from 'react';
import {
  InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

const DashboardSearch = () => (
  <InputGroup>
    <InputGroupAddon addonType="prepend">
      <InputGroupText className="border-0 shadow-none">
        <FaSearch />
      </InputGroupText>
    </InputGroupAddon>
    <Input className="border-0 shadow-none" placeholder="Search" />
  </InputGroup>
);

export default DashboardSearch;
