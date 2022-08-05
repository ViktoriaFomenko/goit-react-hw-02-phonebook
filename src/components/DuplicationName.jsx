export const DuplicationName = name => {
  this.state.contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};
