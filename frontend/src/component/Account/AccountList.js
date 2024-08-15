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
  //Accept request of user
  const handleAccept = async (id) => {
    const userID = id;
    try {
      const res = await axios.post(`http://localhost:8800/user/add/${userID}`);
    } catch (error) {
      console.log(error);
    }
  };
  //Deny user request
  const handleDeny = async (id) => {
    const userID = id;
    try {
      const res = await axios.post(`http://localhost:8800/user/deny/${userID}`);
    } catch (error) {
      console.log(error);
    }
  };
  //Suspend user account
  const handleSuspend = async (id) => {
    const userID = id;
    try {
      const res = await axios.post(``);
    } catch (error) {
      console.log(error);
    }
  };

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
                <MenuItem
                  color="primary"
                  onClick={(e) => {
                    handleAccept;
                  }}
                >
                  Accept
                </MenuItem>
                <MenuItem
                  color="danger"
                  onClick={(e) => {
                    handleDeny(id);
                  }}
                >
                  Deny
                </MenuItem>
                <MenuItem
                  color="warning"
                  onClick={(e) => {
                    handleSuspend;
                  }}
                >
                  Suspend
                </MenuItem>
              </Menu>
            </Dropdown>
          </ListItem>
          <ListDivider inset="gutter" />
        </List>
      ))}
    </div>
  );
}
