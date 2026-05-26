import { describe, expect, it, vi, beforeEach } from 'vitest';
import { activities as staticActivities } from '$lib/data/activities';
import { projects as staticProjects } from '$lib/data/projects';
import { technicalTools as staticTechnicalTools } from '$lib/data/technicals_tools';
import { getActivities, getProjects, getTechnicalTools } from '$lib/utils/db';
import { GET as getActivitiesRoute } from './activities/+server';
import { GET as getProjectsRoute } from './projects/+server';
import { GET as getTechnicalToolsRoute } from './technical-tools/+server';

vi.mock('$lib/utils/db', () => ({
	getActivities: vi.fn(),
	getProjects: vi.fn(),
	getTechnicalTools: vi.fn()
}));

const mockedGetActivities = vi.mocked(getActivities);
const mockedGetProjects = vi.mocked(getProjects);
const mockedGetTechnicalTools = vi.mocked(getTechnicalTools);

describe('API content routes with static fallbacks', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it('returns database activities when available', async () => {
		const dbActivities = [{ id: 'db-activity', title: { fr: 'DB', en: 'DB', ca: 'DB' } }];
		mockedGetActivities.mockResolvedValue(dbActivities as never);

		const response = await getActivitiesRoute();

		expect(await response.json()).toEqual(dbActivities);
	});

	it('falls back to static activities when database activities are empty', async () => {
		mockedGetActivities.mockResolvedValue([] as never);

		const response = await getActivitiesRoute();

		expect(await response.json()).toEqual(staticActivities);
	});

	it('falls back to static activities when database loading fails', async () => {
		mockedGetActivities.mockRejectedValue(new Error('db unavailable'));

		const response = await getActivitiesRoute();

		expect(await response.json()).toEqual(staticActivities);
	});

	it('returns database projects when available', async () => {
		const dbProjects = [{ id: 'db-project', activityId: 'activity-1' }];
		mockedGetProjects.mockResolvedValue(dbProjects as never);

		const response = await getProjectsRoute();

		expect(await response.json()).toEqual(dbProjects);
	});

	it('falls back to static projects when database projects are empty', async () => {
		mockedGetProjects.mockResolvedValue([] as never);

		const response = await getProjectsRoute();

		expect(await response.json()).toEqual(staticProjects);
	});

	it('falls back to static projects when database loading fails', async () => {
		mockedGetProjects.mockRejectedValue(new Error('db unavailable'));

		const response = await getProjectsRoute();

		expect(await response.json()).toEqual(staticProjects);
	});

	it('returns database technical tools when available', async () => {
		const dbTechnicalTools = [{ id: 'db-tool', title: { fr: 'DB', en: 'DB', ca: 'DB' } }];
		mockedGetTechnicalTools.mockResolvedValue(dbTechnicalTools as never);

		const response = await getTechnicalToolsRoute();

		expect(await response.json()).toEqual(dbTechnicalTools);
	});

	it('falls back to static technical tools when database tools are empty', async () => {
		mockedGetTechnicalTools.mockResolvedValue([] as never);

		const response = await getTechnicalToolsRoute();

		expect(await response.json()).toEqual(staticTechnicalTools);
	});

	it('falls back to static technical tools when database loading fails', async () => {
		mockedGetTechnicalTools.mockRejectedValue(new Error('db unavailable'));

		const response = await getTechnicalToolsRoute();

		expect(await response.json()).toEqual(staticTechnicalTools);
	});
});
