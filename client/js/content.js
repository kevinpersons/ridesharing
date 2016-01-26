// initialize content list height to maximize space
Template.content.rendered = function() {
  $("#contentList").css('max-height',$(window).height()-130);
};
