$(function(){

  let search_list = $(".user-search-result");
  let member_list = $(".chat-group-users");

  function appendUser(user){
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</div>
                </div>`
    search_list.append(html);
    return html
  }

  function appendErroMsgToHTML(msg){
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ msg }</p>
                </div>`
    search_list.append(html);
  }

  function appendMember(name, id){
    let html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${ id }'>
                  <p class='chat-group-user__name'>${ name }</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    member_list.append(html);
  }

  $(function(){
    $(document).on("click", ".user-search-add", function(){
      let id = $(this).data("user-id");
      let name = $(this).data("user-name");
      $(this).parent().remove();
      appendMember(name, id);
    });
  });

  $(function(){
    $(document).on("click",".user-search-remove", function(){
      $(this).parent().remove();
    })
  })

  $('#user-search-field').on("keyup",function(){
    let input = $('#user-search-field').val();
    if (input.length != ""){
      $.ajax({
      type: 'GET',
      url:  '/users',
      data: { search : input },
      dataType: 'json'
    })

    .done(function(users){
      $(".user-search-result").empty();
      if (users.length !== 0 ){
        users.forEach(function(user){
          appendUser(user);
          
        });
      }else{
        appendErroMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
    }
  });
});