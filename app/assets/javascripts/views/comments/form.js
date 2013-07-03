KonachaTest = {};
KonachaTest.Views = {};
KonachaTest.Views.Comments = {};
KonachaTest.Views.Comments.Form = function(options){
  this.el = options.el;
  this.form = $('form', options.el);

  $(this.el).hide();

  this.trigger = options.trigger;

  this.triggerClicked = function(e){
    e.preventDefault();
    $(this.el).show();
  };

  this.commentAdded = function(comment){
    $('.comment-list').append($('<li>').html(comment.body));
  };

  this.formSubmitted = function(e){
    e.preventDefault();
    $.ajax({
      url: $(this.form).attr('action') + '.json',
      type: 'POST',
      data: $(this.form).serialize(),
      success: this.commentAdded
    });
  };

  _.bindAll(this, 'triggerClicked', 'formSubmitted', 'commentAdded');

  $(this.trigger).on('click', this.triggerClicked);
  $(this.form).on('submit', this.formSubmitted);
};
