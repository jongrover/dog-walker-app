$(function(){

  $('#add-owner').click(function(){
    var firstName = $('#owner-first-name').val(),
        owner = new Owner(firstName),
        optionEle = '<option value="'+owner.id+'">'+firstName+'</option>';
    $('#select-owner').append(optionEle);
  });

  $('#add-dog').click(function(){
    var firstName = $('#dog-first-name').val(),
        ownerId = $('#select-owner').val();
    new Dog(firstName, Owner.all[ownerId]);
  });

});