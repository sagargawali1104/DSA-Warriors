/* =========================================================
   CODER ARMY
   DAILY PROBLEMS + MEMBERS + THEME
   Created by Sagar Gawali
========================================================= */


/* =========================================================
   TODAY'S PROBLEMS
========================================================= */

const dailyProblems = [
    {
    id: 17,
    date: "Day 9",
    title: "Array Insert at Index",
    topic: "Array Basics",
    difficulty: "Basic",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/array-insert-at-index/1"
},

{
    id: 18,
    date: "Day 9",
    title: "Segregate 0s and 1s",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1"
},



    

];



/* =========================================================
   PREVIOUS PROBLEMS
========================================================= */

const previousProblems = [

    {
        id: 1,

        date: "Day 1",

        title: "Print Elements of Array",

        topic: "Array Basics",

        difficulty: "Basic",

        platform: "GeeksforGeeks",

        description:
            "Print all elements of the given array.",

        link:
            "https://www.geeksforgeeks.org/problems/print-elements-of-array4910/1"
    },


    {
        id: 2,

        date: "Day 1",

        title: "Sum of Array",

        topic: "Array Basics",

        difficulty: "Basic",

        platform: "GeeksforGeeks",

        description:
            "Find the sum of all elements of the array.",

        link:
            "https://www.geeksforgeeks.org/problems/sum-of-array2326/1"
    },


    {
        id: 3,

        date: "Day 2",

        title: "Find Maximum Element",

        topic: "Array Basics",

        difficulty: "Basic",

        platform: "GeeksforGeeks",

        description:
            "Find the maximum element in the given array.",

        link:
            "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
    },


    {
        id: 4,

        date: "Day 2",

        title: "Find Minimum Element",

        topic: "Array Basics",

        difficulty: "Basic",

        platform: "GeeksforGeeks",

        description:
            "Find the minimum element in the given array.",

        link:
            "https://www.geeksforgeeks.org/problems/min-element-in-array/1"
    },
    {
        id: 5,

        date: "Day 3",

        title: "Second Largest Element",

        topic: "Array Basics",

        difficulty: "Easy",

        platform: "GeeksforGeeks",

        description:
            "Find the second largest distinct element in the array.",

        link:
            "https://www.geeksforgeeks.org/problems/second-largest3735/1"
    },


    {
        id: 6,

        date: "Day 3",

        title: "Reverse an Array",

        topic: "Array Basics",

        difficulty: "Easy",

        platform: "GeeksforGeeks",

        description:
            "Reverse the given array without changing its elements.",

        link:
            "https://www.geeksforgeeks.org/problems/reverse-an-array/1"
    },
     {
    id: 7,
    date: "Day 4",
    title: "Rotate Array By One",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/"
},
{
    id: 8,
    date: "Day 4",
    title: "Remove Duplicates from Sorted Array",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "LeetCode",
    link:
        "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
},
    {
    id: 9,
    date: "Day 5",
    title: "Count Odd and Even",
    topic: "Array Basics",
    difficulty: "Basic",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/count-odd-even-java/1"
},

{
    id: 10,
    date: "Day 5",
    title: "Palindrome Array",
    topic: "Array Basics",
    difficulty: "Basic",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/perfect-arrays4645/1"
},
{
    id: 11,
    date: "Day 6",
    title: "Union of Two Arrays",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1"
},

{
    id: 12,
    date: "Day 6",
    title: "Intersection of Two Arrays",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/intersection-of-two-arrays2404/1"
},
{
    id: 13,
    date: "Day 7",
    title: "Third Largest",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/third-largest-element/1"
},

{
    id: 14,
    date: "Day 7",
    title: "Max Sum Path in Two Arrays",
    topic: "Array Basics",
    difficulty: "Medium",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/max-sum-path-in-two-arrays/1"
},
{
    id: 15,
    date: "Day 8",
    title: "Replace all 0's with 5",
    topic: "Basic Math",
    difficulty: "Basic",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/replace-all-0s-with-5/1"
},

{
    id: 16,
    date: "Day 8",
    title: "Palindrome Array",
    topic: "Array Basics",
    difficulty: "Basic",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/perfect-arrays4645/1"
},


];



/* =========================================================
   LOCAL STORAGE
========================================================= */

let solvedProblems =
    JSON.parse(
        localStorage.getItem("solvedProblems")
    ) || [];



/* =========================================================
   HTML ELEMENTS
========================================================= */

const todayContainer =
    document.getElementById(
        "todayProblems"
    );


const previousContainer =
    document.getElementById(
        "previousProblems"
    );


const solvedCount =
    document.getElementById(
        "solvedCount"
    );


const memberCount =
    document.getElementById(
        "memberCount"
    );


const memberList =
    document.getElementById(
        "memberList"
    );


const themeBtn =
    document.getElementById(
        "themeBtn"
    );



/* =========================================================
   DISPLAY TODAY'S PROBLEMS
========================================================= */

function displayTodayProblems() {

    if (!todayContainer) {
        return;
    }


    todayContainer.innerHTML = "";


    dailyProblems.forEach(
        function(problem) {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "problem-card";


            const difficultyClass =
                problem.difficulty
                    .toLowerCase();


            const isSolved =
                solvedProblems.includes(
                    problem.id
                );


            card.innerHTML = `

                <div class="problem-top">

                    <span class="difficulty ${difficultyClass}">
                        ${problem.difficulty}
                    </span>

                    <span>
                        ${problem.topic}
                    </span>

                </div>


                <h3>
                    ${problem.title}
                </h3>


                <p>
                    ${problem.description}
                </p>


                <p>
                    <strong>Platform:</strong>
                    ${problem.platform}
                </p>


                <div class="problem-buttons">

                    <a
                        href="${problem.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="problem-btn"
                    >
                        Open Problem ↗
                    </a>


                    <button
                        class="problem-btn ${
                            isSolved
                                ? "solved"
                                : ""
                        }"
                        onclick="markSolved(${problem.id})"
                    >

                        ${
                            isSolved
                                ? "✓ Solved"
                                : "Mark Solved"
                        }

                    </button>

                </div>

            `;


            todayContainer.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   MARK PROBLEM SOLVED
========================================================= */

function markSolved(id) {


    if (
        !solvedProblems.includes(id)
    ) {

        solvedProblems.push(id);


        localStorage.setItem(
            "solvedProblems",
            JSON.stringify(
                solvedProblems
            )
        );

    }


    updateSolvedCount();


    displayTodayProblems();

}



/* =========================================================
   DISPLAY PREVIOUS PROBLEMS
========================================================= */

function displayPreviousProblems() {


    if (!previousContainer) {
        return;
    }


    previousContainer.innerHTML = "";


    previousProblems.forEach(
        function(problem) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "previous-card";


            card.innerHTML = `

                <div>

                    <h3>
                        ${problem.title}
                    </h3>

                    <p>

                        ${problem.date}

                        ·

                        ${problem.topic}

                        ·

                        ${problem.difficulty}

                        ·

                        ${problem.platform}

                    </p>

                </div>


                <div>

                    <a
                        href="${problem.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="problem-btn"
                    >
                        Practice ↗
                    </a>

                    <span class="status">
                        ✓ Available
                    </span>

                </div>

            `;


            previousContainer.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   SOLVED COUNTER
========================================================= */

function updateSolvedCount() {


    if (!solvedCount) {
        return;
    }


    /*
       Shows the number of solved
       daily problems.

       If you want total solved
       including previous problems,
       use solvedProblems.length.
    */

    const todaySolved =
        dailyProblems.filter(
            function(problem) {

                return solvedProblems.includes(
                    problem.id
                );

            }
        ).length;


    solvedCount.textContent =
        todaySolved;

}



/* =========================================================
   MEMBERS
========================================================= */

const members = [

    "Sagar Gawali",

    "Pratik Abhang",

    "Sairam Shinde",

    "Rohan Badgujar",

    "Ritesh Levade",

    "Kuldhip Bhaisare"

];



/* =========================================================
   DISPLAY MEMBERS
========================================================= */

function displayMembers() {


    if (!memberList) {
        return;
    }


    memberList.innerHTML = "";


    members.forEach(
        function(member) {


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "member";


            div.textContent =
                "⚔️ " + member;


            memberList.appendChild(
                div
            );

        }
    );


    if (memberCount) {

        memberCount.textContent =
            members.length;

    }

}



/* =========================================================
   DARK / LIGHT MODE
========================================================= */

if (themeBtn) {


    themeBtn.addEventListener(
        "click",
        function() {


            document.body.classList.toggle(
                "light"
            );


            if (
                document.body.classList.contains(
                    "light"
                )
            ) {

                this.textContent =
                    "☀️";

            } else {

                this.textContent =
                    "🌙";

            }

        }
    );

}



/* =========================================================
   START WEBSITE
========================================================= */

displayTodayProblems();


displayPreviousProblems();


displayMembers();


updateSolvedCount();