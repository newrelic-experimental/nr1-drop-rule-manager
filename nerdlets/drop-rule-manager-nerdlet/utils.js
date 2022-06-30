import { NerdGraphMutation, Toast } from 'nr1'

export function ListDropRules(accountId) {  
  const query = `{
    actor {
      account(id: ${accountId}) {
        nrqlDropRules {
          list {
            rules {
              id
              nrql
              description
              creator {
                email
              }
            }
          }
        }
      }
    }
  }`
  return query
}
 
export function DeleteDropRule(accountId, ruleIds) {
    const query = `mutation {
        nrqlDropRulesDelete(accountId: ${accountId}, ruleIds: [${ruleIds}]) {
          successes {
            id
          }
          failures {
            error {
              description
            }
          }
        }
      }`
      // This returns a promise, so we can .then(refetch) on the click action when we call the delete.
      return NerdGraphMutation.mutate({mutation: query})
}

// successes array will contain the ID of the newly created rule if successful.
// failures array should be empty.
export function CreateDropRule(accountId, description, NRQL, refetch, resetState) {
  if (!description || !NRQL) {
    Toast.showToast({
      title: 'Error',
      description: 'All fields must be filled in.',
      type: Toast.TYPE.CRITICAL,
    })
    return false
  }
    const query = `mutation {
        nrqlDropRulesCreate(accountId: ${accountId}, rules: {action: DROP_DATA, description: "${description}", nrql: "${NRQL}"}) {
          failures {
            error {
              description
            }
          }
          successes {
            id
          }
        }
      }`
      Toast.showToast({
        title: 'Success',
        description: 'Drop rule created.',
        type: Toast.TYPE.NORMAL,
      })
      resetState()
      return NerdGraphMutation.mutate({mutation: query}).then(refetch)
}
