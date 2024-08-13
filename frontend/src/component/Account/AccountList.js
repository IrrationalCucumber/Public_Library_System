import {
  Avatar,
  Dropdown,
  List,
  ListDivider,
  ListItem,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
} from "@mui/joy";
import React from "react";
import AccountListItem from "./AccountListItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountList() {
  const sampleAccounts = ["name1", "name2", "name3", "name4"];
  return (
    <div>
      {sampleAccounts.map((account, index) => (
        <List key={index} size="md" variant="soft">
          <ListItem>
            <ListItemDecorator>
              <AccountCircleIcon />
            </ListItemDecorator>
            <AccountListItem id={index} name={account} />
            <Dropdown>
              <MenuButton variant="soft" color="primary">
                ACTIONS
              </MenuButton>
              <Menu variant="soft" color="primary">
                <MenuItem color="primary">Accept</MenuItem>
                <MenuItem color="danger">Deny</MenuItem>
                <MenuItem color="warning">Suspend</MenuItem>
              </Menu>
            </Dropdown>
          </ListItem>
          <ListDivider inset="gutter" />
        </List>
      ))}
    </div>
  );
}
