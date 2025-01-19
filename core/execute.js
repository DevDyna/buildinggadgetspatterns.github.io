//stackoverflow save life
function loadScript(e) {
  var t = document.getElementsByTagName("head")[0],
    n = document.createElement("script");
  (n.type = "text/javascript"), (n.src = e), t.appendChild(n);
}

loadScript("./core/var.js");

function load() {
  sections.forEach(section=>{
    const data = document.createElement("button")
    data.className = "global";
    data.innerText = section.name;
    data.addEventListener("click", function () {
        window.location.href = "subnet/"+section.id+"/main.html";
      });


    document.getElementById("base_div").appendChild(data);
  })

}
