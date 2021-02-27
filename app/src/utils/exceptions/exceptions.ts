import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
    constructor() {
        super('Forbidden!', HttpStatus.FORBIDDEN);
    }
}

export class NotFoundException extends HttpException {
    constructor() {
        super(
            'Unfortunately, we have no pets with wished characteristics in our schelter, but you can try no search for someone else!',
            HttpStatus.NOT_FOUND,
        );
    }
}

export class InternalServerException extends HttpException {
    constructor() {
        super('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

export class UnauthorizedException extends HttpException {
    constructor() {
        super(
            'Unauthorized. Please, authorize to continue',
            HttpStatus.UNAUTHORIZED,
        );
    }
}
