// Generated by CoffeeScript 1.3.3
(function() {
  var setupDropdowns;

  setupDropdowns = function() {
    var $extraActionsList, $se_option_input, $se_option_list;
    $extraActionsList = $('.action-buttons .extra-actions');
    $se_option_list = $('ul#selector_engine_options');
    $se_option_input = $('input#selector_engine');
    $('button#selector_engine_dropdown').on('click', function(e) {
      e.stopPropagation();
      return $se_option_list.toggleClass('shown');
    });
    $('li', $se_option_list).on('click', function(e) {
      return $se_option_input.val($(e.target).text());
    });
    $('.action-buttons .drop-indicator').on('click', function(e) {
      e.stopPropagation();
      return $extraActionsList.toggleClass('shown');
    });
    $('button', $extraActionsList).on('click', function() {
      var $currentTopButton, $selectedButton;
      $selectedButton = $(this);
      $currentTopButton = $('.action-buttons > button');
      if ($selectedButton[0] === $currentTopButton[0]) {
        return;
      }
      $currentTopButton.after($selectedButton);
      return $extraActionsList.prepend($currentTopButton);
    });
    return $('body').on('click', function() {
      $extraActionsList.removeClass('shown');
      return $se_option_list.removeClass('shown');
    });
  };

  $(function() {
    return setupDropdowns();
  });

}).call(this);
