import { Avatar, List, ListDivider, ListItem, ListItemDecorator } from "@mui/joy";
import React from "react";
import AccountListItem from "./AccountListItem";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function AccountList() {
  const sampleAccounts = ["name1", "name2", "name3", "name4"];
  return (
    <div>
      {sampleAccounts.map((account, index) => (
        <List key={index} size="md" variant="soft">
          <ListItem>
            <ListItemDecorator><AccountCircleIcon /></ListItemDecorator>
            <AccountListItem id={index} name={account} />
          </ListItem> 
          <ListDivider inset="gutter"/>
        </List>
      ))}
    </div>
  );
}
