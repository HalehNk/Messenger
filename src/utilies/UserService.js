// ye function bayad dashte bashim, un function ro bayad export konm ke btunm estefadekonm
// kari ke func bayad najm bede: be server req mide va ye user khas ro barmigardune
// usere khodame
// user mn bayad return she va dakhele hamun profile azash estefade konm
// be liste contact ha ezafe mishe vali bayad ye kari konm nayad tu contacts
// bayad az base hazf she, na inke faghat neshun dade nashe
// vaghti daram kole contacts ro get mikonm, un yeduna ro bayad pak konm
// akhare un URL begu kole list ro begir joz in

function getUser() {
  return fetch('http://localhost:1337/api/contacts/11?populate=*');

  // async await or promise ro pass bede bala
}

export { getUser };
