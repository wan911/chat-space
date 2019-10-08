$(function(){
  function buildHTML(chat){
      let addImage = (chat.image !== null) ? `<img src=${ chat.image } class="chat__content__image">` : ''
      let html = `<div class="chat" data-message-id='${ chat.id }' >
                    <div class="chat__upper">
                      <p class="chat__upper--talker">
                        ${ chat.user_name }
                      </p>
                      <p class="chat__upper--date">
                        ${ chat.time }
                      </p>
                    </div>
                    <div class="chat__content">
                      <p class="chat__content__message">${ chat.message }</p>
                      ${ addImage }
                    </div>
                  </div>`
      return html;
  }

  $("#new_chat").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".chats").append(html);
      $(".chats").animate( {scrollTop: $(".chats")[0].scrollHeight}, 'fast' );
      $('#new_chat')[0].reset();
      $(".input-box__sent").attr("disabled", false);
    })
    .fail(function(){
      alert('エラーが発生しました');
      $(".input-box__sent").attr("disabled", false);
    });
  });

  $(function(){
    let reloadMessages = function() {
      last_chat_id = $('.chat:last').data('message-id')
      $.ajax({
        url: 'api/chats',
        type: 'GET',
        dataType: 'json',
        data: {id: last_chat_id}
      })
      .done(function(chats){
        let insertHTML = '';
        chats.forEach(function(chat){
          insertHTML = buildHTML(chat);
          $(".chats").append(insertHTML);
          $(".chats").animate( {scrollTop: $(".chats")[0].scrollHeight}, 'fast' );
        })
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      });
    };
    setInterval(reloadMessages, 5000);
  });
});