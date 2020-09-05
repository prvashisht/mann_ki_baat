$("#singlestart").on("click", event => {
  $.ajax("/getfiles", {
    method: "GET",
    success: animate_one_by_one,
  })
  return;
});

let files_shown = 0;
let total_files = 0;
let animate_one_by_one = data => {
  const filenames = Object.keys(data).sort();
  total_files = filenames.length;
  let filetext = data[filenames[files_shown++]];
  let lines = filetext.split(/\./).map(line => {
    line = line.trim();
    if (line.length)
      return line + ". ";
  });
  let i = 0;
  $("#text").val("");
  let num_lines_to_show_at_once = $("#num_lines_to_show_at_once").val();
  let timer = setInterval(() => {
    let text_to_add = "";
    for (let j = 0; j < num_lines_to_show_at_once && i < lines.length; j++) {
      if (lines[i]) {
        text_to_add += lines[i];
      }
      i++;
    }
    $("#text").val($("#text").val() + text_to_add);
    $("#go").click();
    if (i >= lines.length) {
      i = 0;
      clearInterval(timer);
    }
  }, $("#seconds_delay").val());
}
