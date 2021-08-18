# Repro Instructions

1. Clone down
1. Install deps
1. Run start script
1. Observe error in terminal - "GraphQLError [Object]: Query root type must be provided."
1. The factory function is present in the [`types` array](https://github.com/nestjs/graphql/blob/master/lib/schema-builder/storages/lazy-metadata.storage.ts#L43) before going through concatPrototypes but missing afterwards - unsure if this is pertinent
1. Observe that the factory function does get called - console output "FACTORY FUNCTION CALLED"


# Resolution

Resolved by the following patch: 
https://github.com/carlevans719/graphql/commit/40031edb16596dcdbd7b3eba85f9c6982ba5253d
