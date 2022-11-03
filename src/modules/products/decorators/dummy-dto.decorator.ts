import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const DummyDto = createParamDecorator((data: string, context: ExecutionContext) => {
    const user = {
        name: 'divyesh ladva',
        number: 12343456
    };

    return data ? user?.[data] : user;
})
