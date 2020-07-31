/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type FollowUserInput = {
    userId: string;
    clientMutationId?: string | null;
};
export type UserListItemFollow_MutationVariables = {
    input: FollowUserInput;
};
export type UserListItemFollow_MutationResponse = {
    readonly followUser: {
        readonly user: {
            readonly viewerIsFollowing: boolean;
        } | null;
    } | null;
};
export type UserListItemFollow_Mutation = {
    readonly response: UserListItemFollow_MutationResponse;
    readonly variables: UserListItemFollow_MutationVariables;
};



/*
mutation UserListItemFollow_Mutation(
  $input: FollowUserInput!
) {
  followUser(input: $input) {
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
    "name": "UserListItemFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "name": "UserListItemFollow_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
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
    "cacheID": "f60fa21abcfc661c63745f03ff5a8193",
    "id": null,
    "metadata": {},
    "name": "UserListItemFollow_Mutation",
    "operationKind": "mutation",
    "text": "mutation UserListItemFollow_Mutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    user {\n      viewerIsFollowing\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f5b5872b4fcb331322cf89cd4ed75d32';
export default node;
