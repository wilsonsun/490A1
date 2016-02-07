angular.module('services')
.factory('addressBook', function(){
  function AddressBook(){};

  AddressBook.people = [
    {id: 'aa', name: 'Beverley McLachlin', dob: 'September 7, 1943', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/beverley-mclachlin-tn.jpg'},
    {id: 'a5', name: 'Rosalie Abella', dob: 'July 1, 1946', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/rosalie-silberman-abella-tn.jpg'},
    {id: '8f', name: 'Thomas Cromwell', dob: 'May 5, 1952', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/thomas-albert-cromwell-tn.jpg'},
    {id: 'd4', name: 'Michael Moldaver', dob: 'December 23, 1947', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/michael-j-moldaver-tn.jpg'},
    {id: 'cf', name: 'Andromache Karakatsanis', dob: 'October 3, 1955', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/andromache-karakatsanis-tn.jpg'}
  ];

  AddressBook.all = function(){
    return AddressBook.people;
  };

  AddressBook.filterByText = function(text){
    res = [];
    var patt = new RegExp(text, "i");

    for (i = 0; i < AddressBook.people.length; i++) {
      if (patt.test(AddressBook.people[i].name))
        res.push(AddressBook.people[i]);
    }

    return res;

  };

  AddressBook.findById = function(id){

    for (i = 0; i < AddressBook.people.length; i++) {
      if (AddressBook.people[i].id == id)
        return AddressBook.people[i];
    }

    return null;

  };

  AddressBook.remove = function(id){

    var item = AddressBook.findById(id);
    if (item != null) {
      var index = AddressBook.people.indexOf(item);
      AddressBook.people.splice(index, 1);
    }

    return item;
  };

  AddressBook.add = function(person){
    AddressBook.people.push(person);

    return;
  };

  AddressBook.update = function(personObj){
    var item = AddressBook.findById(personObj.id);
    if (item != null) {
      var index = AddressBook.people.indexOf(item);
      AddressBook.people[index] = personObj;
      return;
    }

    return null;
  };

  return AddressBook;
});