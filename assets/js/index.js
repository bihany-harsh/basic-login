$("#add_user").submit(function (event) {
  alert("Data inserted!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });
  var request = {
    url: `http://localhost:3000/api/users/${data.is}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert("Data updated");
  });
});

if (window.location.pathname == "/") {
  $onedelete = $(".table tbody td a.delete");
  $onedelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Confirm?")) {
      $.ajax(request).done(function (response) {
        alert("Done");
        location.reload();
      });
    }
  });
}
