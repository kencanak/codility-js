module.exports = {
  binaryGap: function(N){
    // write your code in JavaScript (Node.js 4.0.0)
    /*question

    Task description
    A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

    For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

    Write a function:

    function solution(N);
    that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

    For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

    end of question*/

    //complexity O(log(N))

    /*sample data
    529 || 15 || 51712 >> for trailing 0s
    end of sample data*/

    //convert numbers to binary
    var binaryRaw = (N).toString(2);
    var binaryVal = binaryRaw.split("1");
    var countLast = false;

    //ignore last trailing 0s
    if (binaryRaw.substr(binaryRaw.length-1) === 1)
      countLast = true;
    var max = 0;
    for (var i=0;i<binaryVal.length;i++)
    {
      if(i !== binaryVal.length - 1 || (i == binaryVal.length -1 && countLast))
        max = Math.max(binaryVal[i].length, max);
    }

    return max;
  },
  cyclicRotation: function(A, K){
    /*questions
    A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.

    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.

    Write a function:

    function solution(A, K);
    that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].
    end of questions*/
    //sample data
    //([1, 1, 2, 3, 5], 42)
    //([1000],5)
    // write your code in JavaScript (Node.js 4.0.0)
    var len = A.length;
    if (!A || len === 0)
       return A;

    if (K === 0 || len === 1)
       return A;

    for (var i=0; i<K; i++)
    {
       var last = A[len-1];
       A.pop();

       A.splice(0,0, last);
    }

    return A;
  },
  oddOccurenceInArray: function(A){
    // write your code in JavaScript (Node.js 4.0.0)
    /* question
    A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

    For example, in array A such that:

      A[0] = 9  A[1] = 3  A[2] = 9
      A[3] = 3  A[4] = 9  A[5] = 7
      A[6] = 9
    the elements at indexes 0 and 2 have value 9,
    the elements at indexes 1 and 3 have value 3,
    the elements at indexes 4 and 6 have value 9,
    the element at index 5 has value 7 and is unpaired.
    Write a function:

    function solution(A);
    that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

    For example, given array A such that:

      A[0] = 9  A[1] = 3  A[2] = 9
      A[3] = 3  A[4] = 9  A[5] = 7
      A[6] = 9
    the function should return 7, as explained in the example above.
    Assume that:

    N is an odd integer within the range [1..1,000,000];
    each element of array A is an integer within the range [1..1,000,000,000];
    all but one of the values in A occur an even number of times.
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).


    end of question */
    /* sample data
    A[0] = 9  A[1] = 3  A[2] = 9
    A[3] = 3  A[4] = 9  A[5] = 7
    A[6] = 9
    */
    var dict = {}

    if(A.length === 1)
        return A[0]

    for (var i=0; i<A.length; i++)
    {
        if (!(A[i] in dict))
            dict[A[i]] = 1;
        else
            dict[A[i]] += 1;

        if (dict[A[i]] === 2)
            delete dict[A[i]]
    }

    return parseInt(Object.keys(dict)[0])
  },
  frogJump: function(X, Y, D){
    /* question
    A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

    Count the minimal number of jumps that the small frog must perform to reach its target.

    Write a function:

    function solution(X, Y, D);
    that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

    For example, given:

      X = 10
      Y = 85
      D = 30
    the function should return 3, because the frog will be positioned as follows:

    after the first jump, at position 10 + 30 = 40
    after the second jump, at position 10 + 30 + 30 = 70
    after the third jump, at position 10 + 30 + 30 + 30 = 100
    Assume that:

    X, Y and D are integers within the range [1..1,000,000,000];
    X ≤ Y.
    Complexity:

    expected worst-case time complexity is O(1);
    expected worst-case space complexity is O(1).
    end of question*/
    /* sample data
    X = 10
    Y = 85
    D = 30
    end of sample data*/
    var remainingDist = Y - X;
    return Math.ceil(remainingDist / D);
  },
  tapeEquilibrium: function(A){
    /* question
    A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
    Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
    The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

    In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

    For example, consider array A such that:

      A[0] = 3
      A[1] = 1
      A[2] = 2
      A[3] = 4
      A[4] = 3
    We can split this tape in four places:

    P = 1, difference = |3 − 10| = 7
    P = 2, difference = |4 − 9| = 5
    P = 3, difference = |6 − 7| = 1
    P = 4, difference = |10 − 3| = 7
    end of question*/

    //complexity O(n)

    /*sample data*/
    // var A = [];
    // A[0] = 3
    // A[1] = 1
    // A[2] = 2
    // A[3] = 4
    // A[4] = 3
    /*end of sample data*/

    var len = A.length;
    var min = 0;
    var totalDict = [];
    var total = 0;

    //keep each index's sum in dictionary
    for (var i=0; i<len; i++)
    {
      total += A[i];
      totalDict[i] = total;
    }

    for (var i=1;i<len;i++)
    {
      var leftSum = totalDict[i-1];
      var rightSum = total - leftSum;
      if (i==1)
      {
        min = Math.abs(leftSum - rightSum);
      }
      else {
        min = Math.min(Math.abs(leftSum - rightSum), min);
      }
    }

    return min;
  },
  permMissingElement: function(A){
    /* question
    A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

    Your goal is to find that missing element.

    Write a function:

    function solution(A);
    that, given a zero-indexed array A, returns the value of the missing element.

    For example, given array A such that:

      A[0] = 2
      A[1] = 3
      A[2] = 1
      A[3] = 5
    the function should return 4, as it is the missing element.

    Assume that:

    N is an integer within the range [0..100,000];
    the elements of A are all distinct;
    each element of array A is an integer within the range [1..(N + 1)].
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
    end of question */
    /* sample data
    A[0] = 2
    A[1] = 3
    A[2] = 1
    A[3] = 5
    end of sample data */

    // write your code in JavaScript (Node.js 4.0.0)
    var len = A.length;
    /*arithmetic sum sequence (n/2) × (2a + (n-1)d)*/
    /*total should be array length + 1, and the starting point is always 1 in this case*/
    var idealSumOfAll = ((len+1)/2) * ((2*1) + (len * 1))


    var sum = 0;
    for (var i=0; i < len; i++)
    {
        sum += A[i];
    }

    return idealSumOfAll - sum;
  },
  frogRiverOne: function(X, A){
    /*question
    A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

    You are given a zero-indexed array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

    The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

    For example, you are given integer X = 5 and array A such that:

      A[0] = 1
      A[1] = 3
      A[2] = 1
      A[3] = 4
      A[4] = 2
      A[5] = 3
      A[6] = 5
      A[7] = 4
    In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

    Write a function:

    function solution(X, A);
    that, given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

    If the frog is never able to jump to the other side of the river, the function should return −1.

    For example, given X = 5 and array A such that:

      A[0] = 1
      A[1] = 3
      A[2] = 1
      A[3] = 4
      A[4] = 2
      A[5] = 3
      A[6] = 5
      A[7] = 4
    the function should return 6, as explained above.

    Assume that:

    N and X are integers within the range [1..100,000];
    each element of array A is an integer within the range [1..X].
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(X), beyond input storage (not counting the storage required for input arguments).

    end of question*/
    /* sample data
    For example, you are given integer X = 5 and array A such that:

    A[0] = 1
    A[1] = 3
    A[2] = 1
    A[3] = 4
    A[4] = 2
    A[5] = 3
    A[6] = 5
    A[7] = 4
    end of sample data*/

    var nextValidStep = 0;
    var goalOccurence = -1;
    var dict = {};

    for (var i=0; i<A.length; i++)
    {
        dict[A[i]] = true;
        while((nextValidStep+1) in dict)
        {
            if (nextValidStep !== X)
                nextValidStep += 1;
        }

        if (A[i] === X)
        {
            goalOccurence = i;
        }

        if (goalOccurence > -1 && nextValidStep === X)
        {
            return i;
        }
    }

    return -1;
  },
  permCheck: function(A){
    /* question
    A non-empty zero-indexed array A consisting of N integers is given.

    A permutation is a sequence containing each element from 1 to N once, and only once.

    For example, array A such that:

        A[0] = 4
        A[1] = 1
        A[2] = 3
        A[3] = 2
    is a permutation, but array A such that:

        A[0] = 4
        A[1] = 1
        A[2] = 3
    is not a permutation, because value 2 is missing.

    The goal is to check whether array A is a permutation.

    Write a function:

    function solution(A);
    that, given a zero-indexed array A, returns 1 if array A is a permutation and 0 if it is not.

    For example, given array A such that:

        A[0] = 4
        A[1] = 1
        A[2] = 3
        A[3] = 2
    the function should return 1.

    Given array A such that:

        A[0] = 4
        A[1] = 1
        A[2] = 3
    the function should return 0.

    Assume that:

    N is an integer within the range [1..100,000];
    each element of array A is an integer within the range [1..1,000,000,000].
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
    end of question */

    /* sample data
    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2

    or

    A[0] = 4
    A[1] = 1
    A[2] = 3
    end of sample data */

    var nextValidStep = 1;
    var dict = {};

    for (var i=0; i<A.length; i++)
    {
        if (A[i] in dict)
            return 0;
        dict[A[i]] = true;
        while(nextValidStep in dict)
        {
            nextValidStep += 1;
        }
    }

    if (nextValidStep <= A.length)
        return 0;
    else
        return 1;
  },
  missingInteger: function(A){
    /* question
    Write a function:

    function solution(A);
    that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

    For example, given:

      A[0] = 1
      A[1] = 3
      A[2] = 6
      A[3] = 4
      A[4] = 1
      A[5] = 2
    the function should return 5.

    Assume that:

    N is an integer within the range [1..100,000];
    each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
    end of question */

    var nextValidStep = 1;
    var dict = {};

    for (var i=0; i<A.length; i++)
    {
        dict[A[i]] = true;
        while(nextValidStep in dict)
        {
            nextValidStep += 1;
        }
    }
    return nextValidStep;
  },
  maxCounters: function(N,A){
    /* question
    You are given N counters, initially set to 0, and you have two possible operations on them:

    increase(X) − counter X is increased by 1,
    max counter − all counters are set to the maximum value of any counter.
    A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

    if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
    if A[K] = N + 1 then operation K is max counter.
    For example, given integer N = 5 and array A such that:

        A[0] = 3
        A[1] = 4
        A[2] = 4
        A[3] = 6
        A[4] = 1
        A[5] = 4
        A[6] = 4
    the values of the counters after each consecutive operation will be:

        (0, 0, 1, 0, 0)
        (0, 0, 1, 1, 0)
        (0, 0, 1, 2, 0)
        (2, 2, 2, 2, 2)
        (3, 2, 2, 2, 2)
        (3, 2, 2, 3, 2)
        (3, 2, 2, 4, 2)
    The goal is to calculate the value of every counter after all operations.

    Write a function:

    function solution(N, A);
    that, given an integer N and a non-empty zero-indexed array A consisting of M integers, returns a sequence of integers representing the values of the counters.

    The sequence should be returned as:

    a structure Results (in C), or
    a vector of integers (in C++), or
    a record Results (in Pascal), or
    an array of integers (in any other programming language).
    For example, given:

        A[0] = 3
        A[1] = 4
        A[2] = 4
        A[3] = 6
        A[4] = 1
        A[5] = 4
        A[6] = 4
    the function should return [3, 2, 2, 4, 2], as explained above.

    Assume that:

    N and M are integers within the range [1..100,000];
    each element of array A is an integer within the range [1..N + 1].
    Complexity:

    expected worst-case time complexity is O(N+M);
    expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

    end of question */
    var counters = new Array(N).fill(0);
    var maxCounter = 0;
    var lastUpdate = 0;

    for (var i=0; i<A.length; i++)
    {
        if (A[i] === N+1)
        {
            lastUpdate = maxCounter;
        }
        else
        {
            if (counters[A[i]-1] < lastUpdate)
                counters[A[i]-1] = lastUpdate + 1;
            else
                counters[A[i]-1] += 1;
            maxCounter = Math.max(counters[A[i]-1], maxCounter);
        }
    }

    for (var i=0; i<N; i++)
    {
        if (counters[i] < lastUpdate)
            counters[i] = lastUpdate;
    }
    return counters;
  },
  passingCars: function(A){
    /* question
    A non-empty zero-indexed array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

    Array A contains only 0s and/or 1s:

    0 represents a car traveling east,
    1 represents a car traveling west.
    The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

    For example, consider array A such that:

      A[0] = 0
      A[1] = 1
      A[2] = 0
      A[3] = 1
      A[4] = 1
    We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

    Write a function:

    function solution(A);
    that, given a non-empty zero-indexed array A of N integers, returns the number of pairs of passing cars.

    The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

    For example, given:

      A[0] = 0
      A[1] = 1
      A[2] = 0
      A[3] = 1
      A[4] = 1
    the function should return 5, as explained above.

    Assume that:

    N is an integer within the range [1..100,000];
    each element of array A is an integer that can have one of the following values: 0, 1.
    Complexity:

    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).

    end of question */
    var multipliers = 0;
    var sum = 0;

    for (var i=0; i<A.length; i++)
    {
        if (i > 0 && A[i] !== 0)
        {
            sum += multipliers * 1;
        }

        if (A[i] === 0)
        {
            multipliers += 1;
        }
    }
    if (sum > 1000000000)
        return -1;
    else
        return sum;
  },
  genomicRangeQuery: function(S, P, Q)
  {
    /*question
    A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

    The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

    For example, consider string S = CAGCCTA and arrays P, Q such that:

        P[0] = 2    Q[0] = 4
        P[1] = 5    Q[1] = 5
        P[2] = 0    Q[2] = 6
    The answers to these M = 3 queries are as follows:

    The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
    The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
    The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
    Write a function:

    function solution(S, P, Q);
    that, given a non-empty zero-indexed string S consisting of N characters and two non-empty zero-indexed arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

    The sequence should be returned as:

    a Results structure (in C), or
    a vector of integers (in C++), or
    a Results record (in Pascal), or
    an array of integers (in any other programming language).
    For example, given the string S = CAGCCTA and arrays P, Q such that:

        P[0] = 2    Q[0] = 4
        P[1] = 5    Q[1] = 5
        P[2] = 0    Q[2] = 6
    the function should return the values [2, 4, 1], as explained above.

    Assume that:

    N is an integer within the range [1..100,000];
    M is an integer within the range [1..50,000];
    each element of arrays P, Q is an integer within the range [0..N − 1];
    P[K] ≤ Q[K], where 0 ≤ K < M;
    string S consists only of upper-case English letters A, C, G, T.
    end of question*/
    //sample data
    //('TC',[0,0,1],[0,1,1])
    // write your code in JavaScript (Node.js 4.0.0)
    var res = [];
    var dict = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4
    }

    var gnomeLength = S.length;
    var totalDict = [];
    var totalCount = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    }

    for (var i=0; i<=gnomeLength; i++)
    {
        totalDict.push({'A': totalCount['A'], 'C': totalCount['C'], 'G': totalCount['G'], 'T': totalCount['T']});
        totalCount[S[i]]++;
    }


    for (var i=0; i<P.length; i++)
    {
        var fromRange = P[i];
        var toRange = Q[i] + 1;

        if (fromRange === toRange)
            res.push(dict[S[fromRange]]);
        //counts A
        else if (totalDict[toRange]['A'] - totalDict[fromRange]['A'] > 0)
            res.push(dict['A']);
        //counts C
        else if (totalDict[toRange]['C'] - totalDict[fromRange]['C'] > 0)
            res.push(dict['C']);
        //counts G
        else if (totalDict[toRange]['G'] - totalDict[fromRange]['G'] > 0)
            res.push(dict['G']);
        //counts T
        else
            res.push(dict['T']);

    }

    return res;
  }
};
var Codility = require('./index.js');
var A = [];
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3
console.log(Codility.tapeEquilibrium(A));
