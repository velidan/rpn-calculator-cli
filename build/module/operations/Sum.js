import Operation from './Operation';
export default class Sum extends Operation {
    constructor(symbol = '+') {
        super(symbol);
    }
    execute(param1, param2) {
        this.validateParams(param1, param2);
        return param1 + param2;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL29wZXJhdGlvbnMvU3VtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxNQUFNLGFBQWEsQ0FBQztBQUVwQyxNQUFNLENBQUMsT0FBTyxPQUFPLEdBQUksU0FBUSxTQUFTO0lBQ3hDLFlBQVksU0FBaUIsR0FBRztRQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxNQUFjLEVBQUUsTUFBYztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVwQyxPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUNGIn0=