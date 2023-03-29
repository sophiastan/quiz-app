// Javascript Code for
// Maximum length subsequence
// with difference between
// adjacent elements
// as either 0 or 1
 
    // function to find maximum
    // length subsequence
    // with difference between
    // adjacent elements as
    // either 0 or 1
    function  maxLenSub(arr, n)
    {
        let mls = new Array(n).fill(1), max = 0;
          
        // Initialize mls[] values for all indexes
        for (let i = 0; i < n; i++)
            mls[i] = 1;
          
        // Compute optimized maximum length
        // subsequence values in bottom up manner
        for (let i = 1; i < n; i++)
            for (let j = 0; j < i; j++)
                if (Math.abs(arr[i] - arr[j]) <= 1
                      && mls[i] < mls[j] + 1)
                    mls[i] = mls[j] + 1;
          
        // Store maximum of all 'mls' values in 'max'   
        for (let i = 0; i < n; i++)
            if (max < mls[i])
                max = mls[i];
          
        // required maximum length subsequence
        return max;       
    }
     
     
 
// driver program
 
        let arr = [2, 5, 6, 3, 7, 6, 5, 8];
        let n = arr.length;
        document.write("Maximum length subsequence = "+
                               maxLenSub(arr, n));

 function MaxSequence(n){
    let orderedSequence = new Array(n).fill(i);
    let subsequences = 1;
    let maxSequence = 0;
    for (let i = 0; i < orderedSequence.length - 1; i++)
    {                
        if (orderedSequence[i] == orderedSequence[i + 1] || orderedSequence[i] + 1 == orderedSequence[i + 1])
        {
            subsequences++;
        }
        else
        {
            maxSequence = maxSequence < subsequences ? subsequences : maxSequence;
            subsequences = 1;
        }

    }

    return maxSequence;
}