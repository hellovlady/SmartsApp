import React from "react";
import { connect } from "react-redux";

import UserInfo from "./UserInfo/UserInfo";

import { IContactData, IState } from "../../../../shared/interfaces/interfaces";

import styles from "./chat.module.css";

interface IProps {
	contacts: IContactData[];
	selectedContact: number;
}

function Chat({ contacts, selectedContact }: IProps) {
	return (
		<div className={styles.Body}>
			<UserInfo userData={contacts[selectedContact]} />
			<h1 className="text">Chat</h1>
		</div>
	);
}

const mapStateToProps = (state: IState) => ({
	contacts: state.contact.contacts,
	selectedContact: state.contact.selectedContact!,
});

export default connect(mapStateToProps)(Chat);
