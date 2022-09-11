console.log(solution([2, 4, 5, 6])); 


function solution(array) { 
    let multiplica = array.map(item => {
        return item*2
    })
    return multiplica
}

//Esto lo puedes comparar:

// return array.map((item) => item * 2); 