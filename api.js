const url = "https://fortniteapi.io/v1/news?lang=en&type=br"

async function getData(){
	const res = await fetch(url)
	console.log(res)
}

getData()

var chart = new OrgChart(document.getElementById("tree"), {
    template: "isla",
    enableSearch: false,
    mouseScrool: OrgChart.action.none,
    nodeBinding: {
        field_0: "name",
        field_1: "title"
    },
    nodes: [
        { id: 1, name: "Amber McKenzie", title: "CEO" },
        { id: 2, pid: 1, name: "Ava Field", title: "IT Manager" },
        { id: 3, pid: 1, name: "Rhys Harper" }
    ]
});