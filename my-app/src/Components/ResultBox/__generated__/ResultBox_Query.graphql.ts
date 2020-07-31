/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ResultBox_QueryVariables = {
    count: number;
    cursor?: string | null;
    query: string;
};
export type ResultBox_QueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"UserList_query">;
};
export type ResultBox_Query = {
    readonly response: ResultBox_QueryResponse;
    readonly variables: ResultBox_QueryVariables;
};



/*
query ResultBox_Query(
  $count: Int!
  $cursor: String
  $query: String!
) {
  ...UserList_query
}

fragment OrganizationListItem_organization on Organization {
  id
  avatarUrl
  login
  name
  location
  email
  url
}

fragment UserListItem_user on User {
  id
  avatarUrl
  login
  name
  location
  email
  url
  viewerIsFollowing
}

fragment UserList_query on Query {
  users: search(first: $count, after: $cursor, query: $query, type: USER) {
    edges {
      cursor
      node {
        __typename
        ... on User {
          id
          __typename
          ...UserListItem_user
        }
        ... on Organization {
          id
          __typename
          ...OrganizationListItem_organization
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
    userCount
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "USER"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResultBox_Query",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResultBox_Query",
    "selections": [
      {
        "alias": "users",
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerIsFollowing",
                        "storageKey": null
                      }
                    ],
                    "type": "User",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "type": "Organization",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "users",
        "args": (v1/*: any*/),
        "filters": [
          "query",
          "type"
        ],
        "handle": "connection",
        "key": "UserList_users",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "0967cf2af95ea8cd9810139f38fc4633",
    "id": null,
    "metadata": {},
    "name": "ResultBox_Query",
    "operationKind": "query",
    "text": "query ResultBox_Query(\n  $count: Int!\n  $cursor: String\n  $query: String!\n) {\n  ...UserList_query\n}\n\nfragment OrganizationListItem_organization on Organization {\n  id\n  avatarUrl\n  login\n  name\n  location\n  email\n  url\n}\n\nfragment UserListItem_user on User {\n  id\n  avatarUrl\n  login\n  name\n  location\n  email\n  url\n  viewerIsFollowing\n}\n\nfragment UserList_query on Query {\n  users: search(first: $count, after: $cursor, query: $query, type: USER) {\n    edges {\n      cursor\n      node {\n        __typename\n        ... on User {\n          id\n          __typename\n          ...UserListItem_user\n        }\n        ... on Organization {\n          id\n          __typename\n          ...OrganizationListItem_organization\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    userCount\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9be09a153b4f43dc9ccc58b903b25433';
export default node;
