var studentsInfoArray =
[
	{
		name: {firstName: "Noyan", lastName: "AYDIN"},
		age: 16,
		subjects: ["Maths", "Physics", "Chemistry"],
		attendance: {
			Jan: "100%",
			Feb: "99%",
			Mar: "100%"
		}
	},
	{
		name: {firstName: "Abdul", lastName: "Rezzak"},
		age: 13,
		subjects: ["Maths", "Physics", "Chemistry"],
		attendance: {
			Jan: "100%",
			Feb: "99%",
			Mar: "100%"
		}
	},
	{
		name: {firstName: "Alun", lastName: "Hill"},
		age: 12,
		subjects: ["Small Business", "Medium Business", "Journalist"],
		attendance: {
			Jan: "100%",
			Feb: "99%",
			Mar: "100%"
		}
	}
];

db.studentsInfoCollection.insert(studentsInfoArray);