function checkIfPrerequisite(numCourses: number, prerequisites: number[][], queries: number[][]): boolean[] {
  
    const prereqMatrix = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));
    const courseGraph: number[][] = Array.from({ length: numCourses }, () => []);
    const inDegree: number[] = Array(numCourses).fill(0);

    
    for (const [prereq, course] of prerequisites) {
        courseGraph[prereq].push(course);
        ++inDegree[course];
    }

    
    const queue: number[] = [];
    for (let course = 0; course < numCourses; ++course) {
        if (inDegree[course] === 0) {
            queue.push(course);
        }
    }

    
    while (queue.length) {
        const currentCourse = queue.shift()!; 
        for (const nextCourse of courseGraph[currentCourse]) {
            prereqMatrix[currentCourse][nextCourse] = true;
          
            
            for (let preCourse = 0; preCourse < numCourses; ++preCourse) {
                prereqMatrix[preCourse][nextCourse] ||= prereqMatrix[preCourse][currentCourse];
            }

           
            if (--inDegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    
    return queries.map(([startCourse, endCourse]) => prereqMatrix[startCourse][endCourse]);
}