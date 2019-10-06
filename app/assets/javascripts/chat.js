$(function(){
  function buildHTML(chat){

    if ( chat.image === null ){
      let html = `<div class="chat">
                    <div class="chat__upper">
                      <p class="chat__upper--talker">
                        ${ chat.name }
                      </p>
                      <p class="chat__upper--date">
                        ${ chat.time }
                      </p>
                    </div>
                    <div class="chat__content">
                      <p class="chat__content__message">${ chat.message }</p>
                    </div>
                  </div>`
      return html;
    }else{
      let html = `<div class="chat">
                    <div class="chat__upper">
                      <p class="chat__upper--talker">
                        ${ chat.name }
                      </p>
                      <p class="chat__upper--date">
                        ${ chat.time }
                      </p>
                    </div>
                    <div class="chat__content">
                      <p class="chat__content__message">${ chat.message }</p>
                      <img src=${ chat.image } class="chat__content__image">
                    </div>
                  </div>`
      return html;
    };
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
      $("#chat_message").val("");
      $(".chats").animate( {scrollTop: $(".chats")[0].scrollHeight}, 'fast' );
      $(".input-box__sent").attr("disabled", false);
    })
    .fail(function(){

    })
  })
});