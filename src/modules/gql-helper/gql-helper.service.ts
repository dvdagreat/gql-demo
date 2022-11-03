import { Injectable } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class GqlHelperService {
    getFields(resolverInfo: GraphQLResolveInfo): string[] {
        return resolverInfo.fieldNodes[0].selectionSet.selections.map((item: any) => item.name.value);
    }
}
