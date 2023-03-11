/* eslint-disable */
var validateEmail = email => {
  var regEx = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regEx.test(email);
};

var validatePhone = pass => {
  var regEx = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  return regEx.test(pass);
};

// var validatePassword = pass => {
//   var regEx = new RegExp(
//     /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/
//   );
//   return regEx.test(pass);
// };

export var validatorSet3 = params => {
  console.log(params);
  var flags = [];
  if (params.selectedOptions === "" || params.selectedOptions === []) {
    flags.events = "1";
  }
  return flags;
};

export var validatorSet2 = params => {
  console.log(params);
  var flags = {};
  console.log(params, params?.memberName, params.memberName.includes(""));
  if (params.collegeName?.trim() === "" || !params.collegeName) {
    flags.collegeName = "Empty College Name";
  }
  if (params.teamLeader?.trim() === "" || !params.teamLeader) {
    flags.teamLeader = "empty Team Leader Name";
  }
  if (params.teamName?.trim() === "" || !params.teamName) {
    flags.teamName = "empty Team Name";
  }
  if (params.memberName.includes("") || !params.memberName) {
    var i = params?.memberName.reduce(function (ind, el, i) {
      if (el === "") ind.push(i);
      return ind;
    }, []);

    flags.memberName = { i, err: "empty Name" };
  }

  return flags;
};

export var validatorSet1 = params => {
  var flags = {};
  console.log(params);
  if (params.name?.trim() === "" || !params.name) {
    flags.name = "empty name";
  }
  if (params.email?.trim() === "" || !params.email) {
    flags.email = "empty email";
  } else {
    if (!validateEmail(params.email)) {
      flags.email = "invalid email";
    }
  }
  if (params.phone?.trim() === "" || !params.phone) {
    flags.phone = "empty phone no";
  } else {
    if (!validatePhone(params.phone)) {
      flags.phone = "invalid phone";
    }
  }
  if (params.phoneWh?.trim() === "" || !params.phoneWh) {
    flags.phoneWh = "empty phone no";
  } else {
    if (!validatePhone(params.phoneWh)) {
      flags.phoneWh = "invalid phone";
    }
  }

  // if (params.password?.trim() == "" || !params.password) {
  //   flags.password = "empty password";
  // } else {
  //   if (!validatePassword(params.password)) {
  //     flags.password =
  //       "Password must contain Minimum eight characters, at least one letter, one number and one special character";
  //   }

    return flags;
  };
