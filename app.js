$(document).ready(() => {
    $('#search').click(async () => {
        const res = await fetch("http://localhost/info2180-lab4/superheroes.php");
        const text = await res.text();
        alert(text);
    })
})