//= require spec_helper


describe("The Comment Form", function() {
  // var server;

  // before(function () { server = sinon.fakeServer.create(); });
  // after(function () { server.restore(); });

  beforeEach(function(){
    $('body').html(JST['templates/comments/form']());
    this.form = new KonachaTest.Views.Comments.Form({
      el: $('#comment-form'),
      trigger: $('.comment-form-trigger')
    });
  });

  it("starts as hidden", function() {
    expect($(this.form.el).is(':hidden')).to.be.true;
  });

  it("is displayed when trigger is clicked", function(){
    $('.comment-form-trigger').trigger('click');
    expect($(this.form.el).is(':hidden')).to.be.false;
  });

  it("appends submitted comments to the comment list", function(){
    $('.comment-form-trigger').trigger('click');
    var commentBody = 'here is a comment';
    $('#comment_body').val(commentBody);
    $('form', this.el).trigger('submit');

    var fakeComment = {
      id: 1,
      body: commentBody
    };

    server.requests[0].respond(
        200,
        { "Content-Type": "application/json" },
        JSON.stringify(fakeComment)
    );

    expect($($('.comment-list li')[0])).to.have.text(commentBody)
  });
});
