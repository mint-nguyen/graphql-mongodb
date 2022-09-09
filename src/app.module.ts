import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from "./lesson/lesson.module";
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			autoSchemaFile: true,
			driver: ApolloDriver,
		}),
		LessonModule,
	],
})
export class AppModule {}
