var comedy = [
 "Are you an orphanage? Cause I wanna give you kids.", "I was feeling a little off today, but you definitely turned me on.", "If you were a vegetable you'd be a cute-cumber.", "I don't have a library card, but do you mind if I check you out?", "Are you religious? Because you're the answer to all my prayers.", "Do you have a map? I'm getting lost in your eyes."
];



function getComedy() {
  function getRandom() {
    return Math.floor( Math.random() * comedy.length);
  };
  return comedy[getRandom()];
};


$('#theButton2').click(function() {
  $('.comedy').html( getComedy() );
});


//////////////////////////////////////
var dirty = [
 "Did you sit in a pile of sugar? Cause you have a pretty sweet ass.", "Is your daddy a Baker? Because you've got some nice buns!"
];

function getDirty() {
  function randomDirty() {
    return Math.floor(Math.random() * dirty.length);
  }
  return dirty[randomDirty()];
};


$('#theButton').click(function() {
  $('.dirty').html( getDirty() );
});