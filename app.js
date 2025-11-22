$(document).ready(() => {
    $('form').submit(async (e) => {
        e.preventDefault();
        let input = e.target[0];
        let query = input.value.trim();
        const res = await fetch(`superheroes.php?query=${query}`);
        const text = await res.text();
        console.log(text)
        $("#result").html(text);
    })
})