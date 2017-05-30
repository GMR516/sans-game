
var default_bone_set = {
	next_time: 5,
	total_time: 5.1,
	/*bones: [
		[340, 168, 16, 128, -160],
		[340, 24, 16, 128, -160],
		[460, 168, 16, 128, -160],
		[460, 24, 16, 128, -160],
		[580, 168, 16, 128, -160],
		[580, 24, 16, 128, -160],
		[700, 168, 16, 128, -160],
		[700, 24, 16, 128, -160],
		[820, 168, 16, 128, -160],
		[820, 24, 16, 128, -160],
		[-20, 168, 16, 128, 160],
		[-20, 24, 16, 128, 160],
		[-140, 168, 16, 128, 160],
		[-140, 24, 16, 128, 160],
		[-260, 168, 16, 128, 160],
		[-260, 24, 16, 128, 160],
		[-380, 168, 16, 128, 160],
		[-380, 24, 16, 128, 160],
		[-500, 168, 16, 128, 160],
		[-500, 24, 16, 128, 160],
	],*/
	bones: [
		//X   Y   XSC  YSC SPEED
		[340, 168, 16, 128, -150],
		[-20, 168, 16, 128, 150],
		[340, 168, 16, 128, -75],
		[-20, 168, 16, 128, 75],
		[500, 150, 16, 500, -150,"orange"],
		[-180, 150, 16, 500, 150,"orange"],
		[650, 150, 16, 500, -150,"blue"],
		[-330, 150, 16, 500, 150,"blue"],
		[800, 150, 16, 500, -150,"orange"],
		[-480, 150, 16, 500, 150,"orange"],
		[950, 150, 16, 500, -150],
		[-630, 150, 16, 500, 150],
	],
	next_bone_sets: [
		 //"1L", "1R", "2L", "2R", "3",
		"3",
		//"6R",
	],
};


var bone_set_1R = { // wave from the right
	next_time: 1.5,
	total_time: 4,
	bones: [
		[328, 176, 16, 128, -200,"blue"],
		[360, 144, 16, 128, -200,"blue"],
		[392, 128, 16, 128, -200,"blue"],
		[424, 128, 16, 128, -200,"blue"],
	],
	next_bone_sets: [
		"1L", "2L", "2R", "3", "4A", "5A", "6L"
	],
};

var bone_set_1L = { // wave from the left
	next_time: 1.5,
	total_time: 4,
	bones: [
		[-8, 176, 16, 128, 200,"blue"],
		[-40, 144, 16, 128, 200,"blue"],
		[-72, 128, 16, 128, 200,"blue"],
		[-104, 128, 16, 128, 200,"blue"],
	],
	next_bone_sets: [
		"1R", "2L", "2R", "3", "4A", "5A", "6R"
	],
};

var bone_set_2R = { // LINES OF VERTICAL BONES
	next_time: 6,
	total_time: 8,
	bones: [
		[340, 168, 16, 500, -100,"orange"],
		[420, 168, 16, 500, -100,"blue"],
		[500, 168, 16, 500, -100,"orange"],
		[580, 168, 16, 500, -100,"blue"],
		[660, 168, 16, 500, -100,"orange"],
		[740, 168, 16, 500, -100,"blue"],
	],
	next_bone_sets: [
		"1R", "3", "6R"
	],
};

var bone_set_2L = { // LINES OF VERTICAL BONES
	next_time: 6,
	total_time: 8,
	bones: [
		[-20, 40, 16, 500, 100,"orange"],
		[-100, 40, 16, 500, 100,"blue"],
		[-180, 40, 16, 500, 100,"orange"],
		[-260, 40, 16, 500, 100,"blue"],
		[-340, 40, 16, 500, 100,"orange"],
		[-420, 40, 16, 500, 100,"blue"],
	],
	next_bone_sets: [
		"1L", "3", "6L"
	],
};

//SETS OF BONES COLLIDE
var bone_set_3 = {
	next_time: 1.5,
	total_time: 5,
	bones: [
		[328, 168, 16, 128, -200,"orange"],
		[344, 168, 16, 128, -200,"orange"],
		[360, 168, 16, 128, -200,"orange"],
		[376, 168, 16, 128, -200,"orange"],
		[392, 80, 16, 128, -200,"orange"],
		[408, 80, 16, 128, -200,"orange"],

		[-8, 168, 16, 128, 200,"orange"],
		[-24, 168, 16, 128, 200,"orange"],
		[-40, 168, 16, 128, 200,"orange"],
		[-56, 168, 16, 128, 200,"orange"],
		[-72, 80, 16, 128, 200,"orange"],
		[-88, 80, 16, 128, 200,"orange"],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R", "4A", "5A", "6L", "6R",
	],
};




// one-sided hurdles

var bone_set_4A = {
	next_time: 0.8,
	total_time: 2.5,
	bones: [
		[328, 168, 16, 128, -160],
		[328, 24, 16, 128, -160],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3"
	],
};

var bone_set_4B1 = {
	next_time: 1.0,
	total_time: 2.5,
	bones: [
		[328, 152, 16, 128, -160],
		[328, 8, 16, 128, -160],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4B2 = {
	next_time: 1.2,
	total_time: 3.0,
	bones: [
		[328, 136, 16, 128, -135],
		[328, -8, 16, 128, -135],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4B3 = {
	next_time: 1.4,
	total_time: 3.5,
	bones: [
		[328, 120, 16, 128, -115],
		[328, -24, 16, 128, -115],
	],
	next_bone_sets: [
		"4B1", "4B2", "4B3", "4C"
	],
};

var bone_set_4C = {
	next_time: 0.6,
	total_time: 2.5,
	bones: [
		[328, 168, 16, 128, -220],
		[328, 24, 16, 128, -220],
	],
	next_bone_sets: [
		"1R"
	],
};




var bone_set_5A = {
	next_time: 1.4,
	total_time: 2.5,
	bones: [
		[-8, 168, 16, 128, 160],
		[-8, 24, 16, 128, 160],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3"
	],
};

var bone_set_5B1 = {
	next_time: 1.0,
	total_time: 2.5,
	bones: [
		[-8, 152, 16, 128, 160],
		[-8, 8, 16, 128, 160],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5B2 = {
	next_time: 1.2,
	total_time: 3.0,
	bones: [
		[-8, 136, 16, 128, 135],
		[-8, -8, 16, 128, 135],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5B3 = {
	next_time: 1.4,
	total_time: 3.5,
	bones: [
		[-8, 120, 16, 128, 115],
		[-8, -24, 16, 128, 115],
	],
	next_bone_sets: [
		"5B1", "5B2", "5B3", "5C"
	],
};

var bone_set_5C = {
	next_time: 0.6,
	total_time: 2.5,
	bones: [
		[-8, 168, 16, 128, 220],
		[-8, 24, 16, 128, 220],
	],
	next_bone_sets: [
		"1L"
	],
};


//TALL BONE WITH SMALL SHORT BONE
var bone_set_6R = {
	next_time: 1.5,
	total_time: 3.0,
	bones: [
		[-88, 168, 16, 128, 240, "blue"],
		[-8, 100, 16, 128, 240, "orange"],
		[408, 168, 16, 128, -240, "blue"],
		[328, 100, 16, 128, -240, "orange"],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R",
		"6L", "6R", "6L", "6R", "6L", "6R", "6L", "6R"
	],
};

//TWO THINGS OF BONES COLLIDE: BLUE
var bone_set_6L = {
	next_time: 2,
	total_time: 5,
	bones: [
		[328, 168, 16, 128, -200,"blue"],
		[344, 168, 16, 128, -200,"blue"],
		[360, 168, 16, 128, -200,"blue"],
		[376, 168, 16, 128, -200,"blue"],
		[392, 80, 16, 128, -200,"blue"],
		[408, 80, 16, 128, -200,"blue"],

		[-8, 168, 16, 128, 200,"blue"],
		[-24, 168, 16, 128, 200,"blue"],
		[-40, 168, 16, 128, 200,"blue"],
		[-56, 168, 16, 128, 200,"blue"],
		[-72, 80, 16, 128, 200,"blue"],
		[-88, 80, 16, 128, 200,"blue"],
	],
	next_bone_sets: [
		"1L", "1R", "2L", "2R", "4A", "5A", "6L", "6R",
	],
};





var bone_sets = {
	"1R": bone_set_1R,
	"1L": bone_set_1L,
	"2R": bone_set_2R,
	"2L": bone_set_2L,
	"3": bone_set_3,
	"4A": bone_set_4A,
	"4B1": bone_set_4B1,
	"4B2": bone_set_4B2,
	"4B3": bone_set_4B3,
	"4C": bone_set_4C,
	"5A": bone_set_5A,
	"5B1": bone_set_5B1,
	"5B2": bone_set_5B2,
	"5B3": bone_set_5B3,
	"5C": bone_set_5C,
	"6L": bone_set_6L,
	"6R": bone_set_6R,
}
