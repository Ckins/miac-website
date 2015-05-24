(function() {
  $('#answer-submit').click(function() {
    var answerTo, content, items;
    content = $('#content').val();
    items = window.location.href.split('/');
    answerTo = items[items.length - 1];
    return $.post('/Discuss/create', {
      type: 'answer',
      title: '',
      content: content,
      answerTo: answerTo
    }, function(data) {
      alert(data.result + '\n' + (data.msg ? data.msg : void 0));
      if (data.result === 'success') {
        return window.location.reload();
      }
    });
  });

  $('#delete_discussion').click(function() {
    var id = $(this).attr('discussionid');
      return $.post('/discuss/delete', {
          discussionId: id
      }, function(data) {
        alert(data.result + '\n' + (data.msg ? data.msg : void 0));
        if (data.result === 'success') {
          return $(location).attr('href', '/Discuss');
        }
      });
  });

  $('#delete_reply').click(function() {
    var id = $(this).attr('replyid');
    return $.post('/message/delete', {
      messageId: id
    }, function(data) {
      alert(data.result + '\n' + (data.msg ? data.msg : void 0));
        if (data.result === 'success') {
          return window.location.reload();
        }
    });
  }); 

  $('#delete_answer').click(function() {
    var id = $(this).attr('answerid');
      return $.post('/discuss/delete', {
          discussionId: id
      }, function(data) {
        alert(data.result + '\n' + (data.msg ? data.msg : void 0));
        if (data.result === 'success') {
          return window.location.reload();
        }
      });
  })

  $('.reply-submit').click(function() {
    var ObjectId, content;
    content = $('#reply_content').val();
    ObjectId = $(this).attr('answer-id');
    return $.post('/Message/create', {
      replyTo: ObjectId,
      type: 'reply',
      content: content
    }, function(data) {
      alert(data.result + '\n' + (data.msg ? data.msg : void 0));
      if (data.result === 'success') {
        return window.location.reload();
      }
    });
  });

  $('.up').click(function() {
    var discussionId;
    discussionId = $(this).attr('discussion-id');
    return $.post('/Discuss/up', {
      discussionId: discussionId
    }, function(data) {
      alert(data.result + '\n' + (data.msg ? data.msg : void 0));
      if (data.result === 'success') {
        return window.location.reload();
      }
    });
  });

  $('.down').click(function() {
    var discussionId;
    discussionId = $(this).attr('discussion-id');
    return $.post('/Discuss/down', {
      discussionId: discussionId
    }, function(data) {
      alert(data.result + '\n' + (data.msg ? data.msg : void 0));
      if (data.result === 'success') {
        return window.location.reload();
      }
    });
  });


  $('.hide').click(function() {
    $(this).children().eq(1).slideDown();
  });

  $(document).mouseup(function(e){
    var _con = $('.hide');   // 设置目标区域
    if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
      $('.show').slideUp();   // 功能代码
    }
  });


}).call(this);
