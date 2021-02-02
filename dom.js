$("form").on("change", e => {
  e.preventDefault();

  // condition pour rendre les borders du select en vert si une valeur du select a bien été séléctionnée, en rouge si aucune valeur n'est séléctionnée.

  $("select").val()
    ? $("select").removeClass("border-danger").addClass("border-success")
    : $("select").addClass("border-danger");

  // condition pour rendre les borders du textarea en vert si un texte de plus de 15 caratères a bien été écrit, en rouge si ce n'est pas le cas.

  $("textarea").val().length > 15
    ? $("textarea").removeClass("border-danger").addClass("border-success")
    : $("textarea").addClass("border-danger");
});

// si les deux conditions sont remplies, le form disparaît et une alert valide informe l'utilisateur..
$("form").on("submit", e => {
  e.preventDefault();

  if ($("textarea").val().length > 15 && $("select").val()) {
    $("form").remove();
    $(".middle__left")
      .append(`<div class="alert alert-success mt-4" role="alert">
    Votre demande à bien été envoyé! Nous vous répondrons dans les meilleurs délais</a>
  </div>`);
  }
});
