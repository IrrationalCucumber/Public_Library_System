import { List, ListItem } from "@mui/joy";
import React from "react";
import AccountListItem from "./AccountListItem";

export default function AccountList() {
  const sampleAccounts = ["name1", "name2", "name3", "name4"];
  return (
    <div>
      {sampleAccounts.map((account, index) => (
        <List key={index}>
          <ListItem>
            <AccountListItem id={index} name={account} />
          </ListItem>
        </List>
      ))}
    </div>
  );
}
