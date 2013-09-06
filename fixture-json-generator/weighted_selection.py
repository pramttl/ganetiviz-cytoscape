import random

# This function is modeled along the idea of Inverse Transform in probability.
# It tries to select a key from a dictionary with a prbability propotional to its value.

def weighted_pick(d):
    '''
    Takes in a dictionary with keys being any object, specially strings; associates the value as the corresponding
    weight for that object and selects a KEY randomly with the weighted probality constraints.
    '''
    r = random.uniform(0, sum(d.itervalues()))
    s = 0.0
    for k, w in d.iteritems():
        s += w
        if r < s: return k
    return k
