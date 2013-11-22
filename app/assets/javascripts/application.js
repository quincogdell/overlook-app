// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var App = {};

$( document ).ready(function(){
  App.setEventListeners();
});

App.setEventListeners = function() {
  // $("form").submit(function(e){
  //   e.preventDefault();
  //   App.registerUser();
  // });
  $("#new_user").on("submit", App.registerUser);
};

App.registerUser = function(e){
  e.preventDefault();
  var user = { name: $("#user_name").val() };
  $.ajax({
    url: "/users",
    type: "post",
    dataType: "json",
    data: { user: user }
  }).done(function(user){
    $("#welcome").hide().text("Welcome, " + user.name).fadeIn();
  });
};


