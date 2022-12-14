# _DSA-Journey

## Problem solving tips:
### Keep in mind that this is a small part of the entire journey: ###
1. Understand the problem - aka "reflect the question back into your our words."
    -  Do you understand all the words used in stating the problem?
    -  What are you asked to find or show?
    -  Can you restate the problem in your own words?
    -  Can you think of a picture or diagram that might help you understand the problem?
    -  Is there enough information to enable you to find a solution?

2. Devise a plan - aka "Pseudocode"
    * Guess and check           |   * Look for a pattern
    * Make an orderly list      |   * Draw a picture
    * Eliminate possibilities   |   * Solve a simpler problem
    * Use symmetry              |   * Use a model
    * Consider special cases    |   * Work backwards
    * Use direct reasoning      |   * Use a formula
    * Solve an equation         |   * Be ingenious

3. Carry out the plan - aka "code your Pseudocode"
    * Third. Carry out your plan.
    * Carrying out your plan of the solution, check each step. Can you see clearly that the step is correct? Can you prove that it is correct?

4. Look back - aka "refactor"
    * Fourth. Examine the solution obtained.
    * Can you check the result? Can you check the argument?
    * Can you derive the solution differently? Can you see it at a glance?
    * Can you use the result, or the method, for some other problem?


```js
function nameHERE(params){
    // create storage variable
    let result = [];

    // iterate over params data
    for (let i = 0; i < params.length; i++) {

        // if-cond || if-statement-else-logic
        if (params[i] === 0) {  // if-cond
            // add something to created storage variable
            // do something
            result.push(params[i]);

        } else {  // if-statement-else-logic
            // do something
            result.push(params[i - 1]); // do something at index i - 1 of params aka the end of the array

        }
    }

    // return storage variable results\
    return result;
  }
```