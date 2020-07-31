/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type UnfollowUserInput = {
    userId: string;
    clientMutationId?: string | null;
};
export type UserListItemUnFollow_MutationVariables = {
    input: UnfollowUserInput;
};
export type UserListItemUnFollow_MutationResponse = {
    readonly unfollowUser: {
        readonly user: {
            readonly viewerIsFollowing: boolean;
        } | null;
    } | null;
};
export type UserListItemUnFollow_Mutation = {
    readonly response: UserListItemUnFollow_MutationResponse;
    readonly variables: UserListItemUnFollow_MutationVariables;
};



/*
mutation UserListItemUnFollow_Mutation(
  $input: UnfollowUserInput!
) {
  unfollowUser(input: $input) {
    user {
      viewerIsFollowing
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsFollowing",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListItemUnFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserListItemUnFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d78f87dba04d4972aef1255bed618814",
    "id": null,
    "metadata": {},
    "name": "UserListItemUnFollow_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserListItemUnFollow_Mutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    user {\n      viewerIsFollowing\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fd2bde885097a8d190c73bf24f504ce1';
export default node;
